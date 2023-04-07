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
  user= Picture.where(user_id:params[:id])
  user.to_json(include: :user)
end

get '/users' do 
  user= User.all
  user.to_json(include: :pictures)

end
post '/login' do 
  user= User.find_by(username: params[:username])
  if user&&user.password===params[:password]
     

    user.to_json(include: :pictures)
  else
       {errors: ["Invalid username or password"]}.to_json
  end
end
post '/pictures' do
  picture=Picture.create(
    link: params[:image],
    user_id: params[:id],
   likes:0)
    picture.to_json(include: :user)

end

get '/pictures' do
  pictures=Picture.all
  
 pictures.to_json(include: :user)
end

post '/posts/' do

  picture=Picture.find(params[:id])
  picture.update(likes: picture.likes+1
  
  )
  pictures=Picture.all
  
  pictures.to_json(include: :user)
  pictures.to_json(include: :user)
end

delete '/pictures/:id' do

  picture=Picture.find(params[:id])
picture.destroy
pictures=Picture.all
pictures.to_json(include: :user)
end

end
