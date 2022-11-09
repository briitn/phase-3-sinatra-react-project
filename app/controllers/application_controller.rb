class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
post '/users' do
  user = User.create(
    username: params[:username],
    password: params[:password],
    profile_pic: params[:picture]
  )
  user.to_json
end

get '/users/:id' do
  user= User.find (params[:id])
  user.to_json(include: :pictures)
end

get '/' do 
  user= User.all
  user.to_json

end

post '/pictures' do
  picture=Picture.create(
    link: params[:image],
    user_id: params[:id],
    
    likes: params[:count])
    picture.to_json

end

get '/pictures' do
  picture=Picture.all
  
 picture.to_json(include: :user)
end

patch '/pictures/:id' do
  picture=Picture.find(params[:id])
  picture.update(likes: params[:likes]
  
  )
  picture.to_json
end
end
