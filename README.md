<h1 align="center" id="title">Movie Suggestions</h1>

<p align="center"><img src="https://socialify.git.ci/architmadankar/movie-recommendation-JTP/image?description=1&amp;descriptionEditable=Movie%20Recommendation%20Webapp%20using%20Reactjs%20and%20Django&amp;font=Inter&amp;language=1&amp;name=1&amp;owner=1&amp;theme=Light" alt="project-image"></p>

<p id="description">This is a full-stack web application that provides movies recommendations with the list of movies provided. This application is based on Django backend and React frontend</p>


## Overview
*Movie Suggestion is a free and open-source service based on scikit-learn cosine_similarity that can be easily integrated into any system without prior machine learning skills. This System provides REST API for movies recommendations and is easily deployed with docker*


## Table of Contents

 - Technologies Used
 - Requirements
 - Installation
 - Usage
 - Screenshots


### Technologies Used
|  SDK|Version  |
|--|--|
|  nodejs|20  |
|python | 3.10|
|django| latest|
|scikit-learn| latest|
|django-cors | latest|
|djangorestframework | latest|
|yarn| latest|


### Requirements

1. Docker and Docker compose ( for linux )
2. Python 3.10
3. NodeJs 18+ 

<h2>🛠️ Installation Steps:</h2>

## Docker

<p>1. Clone the repository</p>

```
git clone https://github.com/architmadankar/movie-recommendation-JTP.git
```

<p>2. change directory</p>

```
cd movie-recommendation-JTP
```

<p>3. Run docker command</p>

```
docker compose up
```

<p>4. Open Homepage</p>

```
http://localhost:3000
```

### Linux 
1. Install python and node js 

	```bash
    sudo apt install python3 python3-pip nodejs
    ```

2. Clone this repository

      ```bash
    https://github.com/architmadankar/movie-recommendation-JTP.git
      ```
3. Change the directory

    ```bash
    cd movie-recommendation-JTP/frontend   ```
4. Install and run the frontend application

```bash
yarn
```
```
yarn start
```

5. Run backend application
   ```
   cd movie-recommendation-JTP/backend
   ```
6.  Install libs and run Django Backend

   ```bash
	pip install -r requirements.txt
```
```bash
	python3 manage.py runserver
```

7.  Open the service in your browser:  [http://localhost:3000/](http://localhost:3000/)

### Windows

1. Install Python and Nodejs from their official websites
> [Python](https://www.python.org/downloads/) 

> [NodeJs](https://nodejs.org/en/download)

2. Clone this repository

      ```bash
    https://github.com/architmadankar/movie-recommendation-JTP.git
      ```
3. Change the directory


    ```bash
    cd movie-recommendation-JTP/frontend
    ```
4. Install and run the frontend application

	```bash
	yarn
	```
```
	yarn start
```

5. Run backend application
   ```
   cd movie-recommendation-JTP/backend
   ```
6.  Install libs and run Django Backend
 ```bash
pip install -r requirements.txt
```
```
	python manage.py runserver
```
7.  Open the service in your browser:  [http://localhost:3000/](http://localhost:3000/)


## Usage

- Login with credentials i.e.
  ```bash
  username : test , password : test
  ```
- Choose any one movie to get recommendations
  
- To find a movie use browser find command to search for movies
  ```bash
  CTRL + F
  ```

<h2>Project Screenshots:</h2>

#### Login Page

<img src="https://github.com/architmadankar/movie-recommendation-JTP/blob/f34d62987f12f4a32a1e28932c2c2404e96f3f75/screenshots/login.png" alt="project-screenshot" width="400" height="400/">

#### Dashboard

<img src="https://github.com/architmadankar/movie-recommendation-JTP/blob/f34d62987f12f4a32a1e28932c2c2404e96f3f75/screenshots/dashboard.png" alt="project-screenshot">

#### Working 

<img src="https://github.com/architmadankar/movie-recommendation-JTP/blob/a0e2f0ab254055a11d450b46b6ef823c4160a99f/screenshots/working.png" alt="project-screenshot">
