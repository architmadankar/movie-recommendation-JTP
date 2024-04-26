from recommend.models import *
import csv
def db(movie_id,title,genres):
    m = Recommend.objects.create(id=movie_id,title=title,genres=genres)
    
def get_data(csv_output):
    with open(csv_output,'r') as f:
        data = csv.reader(f)
        count = 0
        for r in data:
            movie_id = r[0]
            title = r[1]
            genres = r[2]
            if Recommend.objects.filter(id=movie_id).exists() == False:
                try:
                    db(movie_id,title,genres)
                except:
                    print('error in', r)
        print('done'+str(count))
get_data('./dataset/output.csv')