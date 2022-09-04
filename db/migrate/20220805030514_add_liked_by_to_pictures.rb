class AddLikedByToPictures < ActiveRecord::Migration[6.1]
  def change
    add_column :pictures, :liked_by, :string 
  end
end
