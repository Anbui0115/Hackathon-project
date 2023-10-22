from flask_wtf import FlaskForm
from .models import db, User, Review, Coder, Skill
from wtforms import StringField, SelectMultipleField, SubmitField, IntegerField, FloatField, DateField, SelectField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from flask_login import current_user, login_user, logout_user, login_required



class CreateDanceClassAppointmentForm(FlaskForm):

    # name = StringField("Name", validators=[DataRequired()])

    level = SelectField("Experience", choices=["Beginner: 0-5 years of experience", "Intermediate: 5-10 years of experience, Advanced: 10-20 years of experience, Senior: 20+ years of experience"]validators=[DataRequired()])

    date = DateField('Choose the class you want to register for',
                     validators=[DataRequired()])

    notes = TextAreaField(
        "Share more details with us! ( How long have you been dancing? Do you practice any other styles? What do you hope to learn from these lessons?)", validators=[DataRequired()])

    submit = SubmitField("Register")
