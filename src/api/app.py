from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Story(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=False)
    content = db.Column(db.String(500), unique=False)

    def __init__(self,title,content):
        self.title = title
        self.content = content

class StorySchema(ma.Schema):
    class Meta:
        fields = ("id","title", "content")

story_schema = StorySchema()
stories_schema = StorySchema(many=True)

#Endpoint to create a story
@app.route('/story', methods=["POST"])
def add_story():
    title = request.json['title']
    content = request.json['content']

    new_story = Story(title, content)

    db.session.add(new_story)
    db.session.commit()

    story = Story.query.get(new_story.id)

    return story_schema.jsonify(story)


#Endpoint to query all stories
@app.route('/stories', methods=["GET"])
def get_stories():
    all_stories = Story.query.all()
    result = stories_schema.dump(all_stories)
    return jsonify(result)

#Endpoint for querying a single story
@app.route("/story/<id>", methods=["GET"])
def get_story(id):
    story = Story.query.get(id)
    return story_schema.jsonify(story)

# Endpoint for deleting a record
@app.route("/story/<id>", methods=["DELETE"])
def story_delete(id):
    story = Story.query.get(id)
    db.session.delete(story)
    db.session.commit()

    return story_schema.jsonify(story)


if __name__ == '__main__':
    app.run(debug=True)