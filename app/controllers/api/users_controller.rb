class UsersController < ApiController
  before_action :authenticated?

  def index
    @users = User.all
    @users.each do |user|
      UserSerializer.new(user).as_json
    end
    render json: users, each_serializer: UserSerializer
  end
end
