from flask_wtf import FlaskForm
from ..models import db, User, DanceClassAppointment
from wtforms import StringField, SubmitField, IntegerField, BooleanField, DateField, SelectField, TextAreaField
from wtforms.validators import DataRequired, ValidationError, Email

from flask_login import current_user, login_user, logout_user, login_required



class CreateDanceClassAppointmentForm(FlaskForm):

    first_name = StringField("first_name", validators=[DataRequired()])

    last_name = StringField("last_name", validators=[DataRequired()])

    email =  StringField("email", validators=[DataRequired()])

    age= IntegerField("age", validators=[DataRequired()])

    phone_number = IntegerField("phone_number", validators=[DataRequired()])

    level = SelectField("level", choices=["Beginner: 0-3 years of experience", "Intermediate: 3-6 years of experience, Advanced: 6-10 years of experience, Senior: 10+ years of experience"], validators=[DataRequired()])

    date = DateField('date',validators=[DataRequired()])

    notes = TextAreaField("notes", validators=[DataRequired()])

    submit = SubmitField("Send Enquiry")

    isApproved= BooleanField(default=False)
