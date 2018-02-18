class Api::V1::BaseController < ApplicationController
  before_action :authenticate_user!
  before_action :authenticate_user_with_header!

  class AuthenticationTokenException < Exception; end

  private

  def authenticate_user_with_header!
    authorization_header = request.headers["HTTP_AUTHORIZATION"]
    if authorization_header
      matches = authorization_header.match /Bearer (.*)/
      auth_token = matches[1]
      if auth_token
        user = User.find_by_auth_token(auth_token)
        if user
          sign_in user
          return
        end
      end
    end
    fail AuthenticationTokenException
  end
end
