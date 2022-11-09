class Picture< ActiveRecord::Base
    belongs_to :user
   def includer 
include_user=self.user

   end
end
