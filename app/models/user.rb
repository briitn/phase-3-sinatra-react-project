class User < ActiveRecord::Base

    has_many :pictures
    has_many :follows
end