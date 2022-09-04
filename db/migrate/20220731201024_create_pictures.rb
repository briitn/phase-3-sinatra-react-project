class CreatePictures < ActiveRecord::Migration[6.1]
  def change
    create_table :pictures do |t|
      t.string :link
      t.integer :user_id
      t.string :username
      t.integer :likes
      
    end
  end
end
