from flask_wtf import FlaskForm
from ..models import db, User, General_Appointment
from wtforms import StringField, SelectMultipleField, SubmitField, IntegerField, FloatField, DateField, SelectField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from flask_login import current_user, login_user, logout_user, login_required



class CreateGeneralAppointmentForm(FlaskForm):

    # name = StringField("Name", validators=[DataRequired()])

    type = SelectField("Type", choices=["Makeup", "Emcee/Hosting", "Acting"]validators=[DataRequired()])

    date = DateField("Date", validators=[DataRequired()])

    location = StringField("Location", validators=[DataRequired()])

    #  Duration of requested services in hours
    duration = IntegerField("Duration", validators=[DataRequired()])

    # Specific details of the event: What kind of event is it? How long do you require services for?
    notes = TextAreaField("Notes", validators=[DataRequired()])

    submit = SubmitField("Send Enquiry ")
