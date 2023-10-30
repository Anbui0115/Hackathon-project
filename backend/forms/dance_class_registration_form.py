from flask_wtf import FlaskForm
from ..models import db, User, DanceClassAppointment
from wtforms import StringField, SubmitField, IntegerField, BooleanField, SelectField, TextAreaField
from wtforms.validators import DataRequired

from flask_login import current_user, login_user, logout_user, login_required



class CreateDanceClassRegistrationForm(FlaskForm):

    level = SelectField("level", choices=["Beginner","Intermediate","Advanced","Senior"], validators=[DataRequired()])

    age=IntegerField("age", validators=[DataRequired()] )

    location=StringField("location", validators=[DataRequired()])

    notes = TextAreaField("notes", validators=[DataRequired()])

    submit = SubmitField("Register")
