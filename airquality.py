import urllib.request
import json
import os
import glob
import time
from ISStreamer.Streamer import Streamer

# --------- User Settings ---------
LATITUDE = "29.6516"
LONGITUDE = "-82.3248"
AIRVISUAL_API_KEY = "336ad139-4648-4bb0-a238-dc75003ddc09"
BUCKET_NAME = "Gainesville"
BUCKET_KEY = "TVYL7NKSCK33"
ACCESS_KEY = "ist_4IshdKuJrE9Enki9hEhE87faJs_ZoaOp"
MINUTES_BETWEEN_READS = 5
# ---------------------------------

def is_float(string):
    try:
        float(string)
        return True
    except ValueError:
        return False

def get_current_conditions():
        api_conditions_url = "https://api.airvisual.com/v2/nearest_city?lat=" + LATITUDE + "&lon=" + LONGITUDE + "&key=" + AIRVISUAL_API_KEY
        try:
                f = urllib.request.urlopen(api_conditions_url)
        except:
                return []
        json_currently = f.read()
        f.close()
        return json.loads(json_currently)


def main():
        curr_conditions = get_current_conditions()
        if ('data' not in curr_conditions):
                print("Error! AirQual API call failed, check your GPS coordinates and make sure your AirQual API key is valid!\n")
                print(curr_conditions)
                exit()
        else:
                streamer = Streamer(bucket_name=BUCKET_NAME, bucket_key=BUCKET_KEY, access_key=ACCESS_KEY)
        while True:

                curr_conditions = get_current_conditions()
                if ('data' not in curr_conditions):
                        print("Error! AirQual API call failed. Skipping a reading then continuing ...\n")
                        print(curr_conditions)
                else:
                        streamer.log(":house: Location", LATITUDE + "," + LONGITUDE)

                        if 'aqius' in curr_conditions['data']['current']['pollution'] and isFloat(curr_conditions['data']['current']['pollution']['aqius']):
                                streamer.log("AQIUS",curr_conditions['data']['current']['pollution']['aqius'])

                        if 'mainus' in curr_conditions['data']['current']['pollution']:
                                streamer.log("MAINUS",curr_conditions['data']['current']['pollution']['mainus'])

                        streamer.flush()
                time.sleep(60*MINUTES_BETWEEN_READS)

if __name__ == "__main__":
    main()
