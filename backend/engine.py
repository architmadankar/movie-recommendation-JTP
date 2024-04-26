import ast
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd

def genre(text):
    L = []
    for i in ast.literal_eval(text):
        L.append(i['name']) 
    return L 

def cast(text):
    L = []
    counter = 0
    for i in ast.literal_eval(text):
        if counter < 3:
            L.append(i['name'])
        counter+=1
    return L 

def get_director(text):
    L = []
    for i in ast.literal_eval(text):
        if i['job'] == 'Director':
            L.append(i['name'])
    return L 

def collapse(L):
    L1 = []
    for i in L:
        L1.append(i.replace(" ",""))
    return L1

def prepocessing():
    movies = pd.read_csv('./dataset/movies.csv') # kaggle 
    credits = pd.read_csv('./dataset/credits.csv') # kaggle  
    movies = movies.merge(credits,on='title')
    movies = movies[['movie_id','title','overview','genres','keywords','cast','crew']]
    movies.dropna(inplace=True)
    movies['genres'] = movies['genres'].apply(genre)
    movies['keywords'] = movies['keywords'].apply(genre)
    movies['cast'] = movies['cast'].apply(cast)
    movies['cast'] = movies['cast'].apply(lambda x:x[0:3])
    movies['crew'] = movies['crew'].apply(get_director)
    movies['cast'] = movies['cast'].apply(collapse)
    movies['crew'] = movies['crew'].apply(collapse)
    movies['genres'] = movies['genres'].apply(collapse)
    movies['keywords'] = movies['keywords'].apply(collapse)
    movies['overview'] = movies['overview'].apply(lambda x:x.split())
    movies['tags'] = movies['overview'] + movies['genres'] + movies['keywords'] + movies['cast'] + movies['crew']
    new = movies.drop(columns=['overview','genres','keywords','cast','crew'])
    new['tags'] = new['tags'].apply(lambda x: " ".join(x))
    return new

def recommend(movie):
    new = prepocessing()   
    cv = CountVectorizer(max_features=5000,stop_words='english')
    vector = cv.fit_transform(new['tags']).toarray()
    similarity = cosine_similarity(vector)
    index = new[new['title'] == movie].index[0]
    distances = sorted(list(enumerate(similarity[index])),reverse=True,key = lambda x: x[1])
    res = []
    for i in distances[1:6]:
        res.append(new.iloc[i[0]].movie_id)
    return res