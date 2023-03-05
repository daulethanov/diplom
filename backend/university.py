from flask import Blueprint

api = Blueprint('api', __name__, url_prefix='/api/v1')


@api.route('/university_list', methods=['GET'])
def university_list():
    return 'fdsf'


