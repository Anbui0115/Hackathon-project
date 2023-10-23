from flask import Blueprint, render_template, url_for, redirect, request, jsonify
from ..models import BillingModel, User, db
from flask_login import current_user, login_user, logout_user, login_required
from ..forms.billing_form import CreateBillingForm


# ____________________________________________________________________________________________________________________

billing_bp = Blueprint(
    "billing_routes", __name__, url_prefix="/api/billing")
# ____________________________________________________________________________________________________________________


# CREATE BILLING

@billing_bp.route("/new/", methods=["POST"])
@login_required
def create_billing():

    create_billing_form = CreateBillingForm()
    create_billing_form['csrf_token'].data = request.cookies['csrf_token']
    # print("current user is: **********************************", current_user)

    if  create_billing_form.validate_on_submit:
        data =  create_billing_form.data
        new_billing = BillingModel(
                user_id=current_user.id,
                billing_date=data["date"],
                amount=data["amount"],
                billing_type=data["billing_type"],
                charged=True,
            )

        db.session.add(new_billing)
        db.session.commit()

        new_billing_obj = new_billing.to_dict()
        return new_billing_obj, 201
    return {"Error": "Validation Error"}, 401
