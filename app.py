# importing requests package
import requests
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/news')
def news():
    query_params = {
        "source": "bbc-news",
        "sortBy": "top",
        "keywords": "elon",
        "apiKey": "4dbc17e007ab436fb66416009dfb59a8",
        "contains": "elon"
    }
    main_url = " https://newsapi.org/v1/articles"

    # fetching data in json format
    res = requests.get(main_url, params=query_params)
    getreq = res.json()

    # getting all articles in a string article
    article = getreq["articles"]

    # empty list which will
    # contain all trending news
    results = []

    for ar in article:
        results.append(ar["title"])

    for i in range(len(results)):
        # printing all trending news
        print(i + 1, results[i])
    return render_template('news.html' ,data1=results[0], data2=results[2],data3=results[3],data4=results[4],data5=results[5],data6=results[6],data7=results[7],data8=results[8],data9=results[9],data10=results[1])


@app.route('/sources')
def sources():
    return render_template('sources.html')







# Driver Code

if __name__ == '__main__':

    # function call
    app.run(debug=True)




