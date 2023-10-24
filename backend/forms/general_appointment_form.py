from flask_wtf import FlaskForm
from ..models import db, User, GeneralAppointment
from wtforms import StringField, SelectMultipleField, SubmitField, IntegerField, FloatField, DateField, SelectField, TextAreaField
from wtforms.validators import DataRequired, ValidationError, Email
from flask_login import current_user, login_user, logout_user, login_required



class CreateGeneralAppointmentForm(FlaskForm):


    first_name = StringField("first_name", validators=[DataRequired()])

    last_name = StringField("last_name", validators=[DataRequired()])

    email = StringField("email",validators=[Email(required=True)])

    phone_number = IntegerField("phone_number", validators=[DataRequired()])

    type = SelectField("type", choices=["Makeup", "Emcee/Hosting"], validators=[DataRequired()])

    date = DateField("date", validators=[DataRequired()])

    location = StringField("location", validators=[DataRequired()])

    #  Duration of requested services in hours
    duration = IntegerField("duration", validators=[DataRequired()])

    # Specific details of the event: What kind of event is it? How long do you require services for?
    notes = TextAreaField("notes", validators=[DataRequired()])

    submit = SubmitField("Send Enquiry")
