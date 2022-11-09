class RemoveUsernameFromPictures < ActiveRecord::Migration[6.1]
  def change
    remove_column :pictures, :username, :string

  end
end
