from flask_wtf import FlaskForm
from ..models import db, User, Media
from wtforms import StringField, SubmitField, TextField, SelectField
from wtforms.validators import DataRequired
from flask_login import current_user, login_user, logout_user, login_required



class CreateMedia(FlaskForm):

    video_url = StringField("video_url", validators=[DataRequired()])
    photo_url= StringField("photo_url", validators=[DataRequired()])
    description = TextField("description")
    authorization = SelectField("authorization", choices=["Public", "All Students", "Beginner", "Intermediate", "Advanced", "Senior", "Admin"])
    submit = SubmitField("Upload Media")
