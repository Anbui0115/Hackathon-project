# from flask import Blueprint, render_template, url_for, redirect, request, jsonify
# from ..models import GeneralAppointment, User, db
# from flask_login import current_user, login_user, logout_user, login_required
# from ..forms.general_appointment_form import CreateGeneralAppointmentForm


# # ____________________________________________________________________________________________________________________

# general_appointment_bp = Blueprint(
#     "general_appointments_routes", __name__, url_prefix="/api/generalappointments")


# # ____________________________________________________________________________________________________________________

# # GET ALL GENERAL APPOINTMENTS


# @general_appointment_bp.route("/", methods=["GET"])
# def all_general_appointments():
#     general_appointments = General_Appointment.query.all()
#     response = []
#     if general_appointments:
#         for apt in general_appointments:
#             apt_obj = apt.to_dict()
#             response.append(apt_obj)
#         print("THIS IS general_appointments FROM BACKEND", response)
#         return {
#             "general_appointments": response
#         }, 200
#     return {"Error": "Appointment Not Found"}, 404


# # ____________________________________________________________________________________________________

# # CREATE A GENERAL APPOINTMENT

# @general_appointment_bp.route("/new/", methods=["POST"])
# @login_required
# def create_general_apt():

#     create_general_apt_form = CreateGeneralAppointmentForm()
#     create_general_apt_form['csrf_token'].data = request.cookies['csrf_token']
#     # print("current user is: **********************************", current_user)

#     if create_general_apt_form.validate_on_submit:
#         data = create_general_apt_form.data
#         new_general_apt = General_Appointment(
#             # name=data["name"],
#             user_id=current_user.id,
#             type=data["Type"],
#             date=data["Class"],
#             duration=data["Duration"],
#             location=data["Location"],
#             notes=data["Notes"],
#             accepted=False
#         )

#         db.session.add(new_general_apt)
#         db.session.commit()

#         new_general_apt_obj = new_general_apt.to_dict()
#         return new_general_apt_obj, 201


# # __________________________________________________________________________________________________


# # DELETE A GENERAL APPOINTMENT


# @general_appointment_bp.route("/<int:general_apt_id_id>/", methods=["DELETE"])
# def delete_general_apt(general_apt_id):

#     current_general_apt = General_Appointment.query.get(general_apt_id)

#     if current_general_apt:
#         db.session.delete(current_general_apt)
#         db.session.commit()
#         return "Your appointment was succesfully deleted"

#     return "404 review not found"


# # function to convert datetime obj to integer value so we can compare

# def to_integer(date_time):
#     return 10000*date_time.year + 100*date_time.month + date_time.day


# # _____________________________________________________________________________________
