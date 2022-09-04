class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
post '/create' do
  user = User.create(
    username: params[:username],
    password: params[:password],
    profile_pic: params[:picture]
  )
  user.to_json
end

get '/sign_in/:username' do
  user= User.find (params[:username]
)
user.to_json
end
get '/' do 
  user= User.all
  user.to_json

end

post '/upload' do
  picture=Picture.create(
    link: params[:image],
    user_id: params[:id],
    username: params[:user],
    likes: params[:count])
    picture.to_json
end



patch '/likes' do
  picture=Picture.find(params[:id])
  picture.update(likes: params[:count],
  liked_by: params[:liked_by]
  )
  picture.to_json
end
end
