from flask.templating import render_template
from app import app
import time

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/time', methods=['POST'])
def current_time():
    return {'time': f'Time: {time.ctime()}'}