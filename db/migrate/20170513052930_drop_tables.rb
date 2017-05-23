class DropTables < ActiveRecord::Migration
  def change
    drop_table :blogs
    drop_table :comments
    drop_table :contacts
    drop_table :listings
    remove_column :users, :buyer
    remove_column :users, :seller
    remove_column :users, :blog_emails
    remove_column :users, :preferred_contact
    remove_column :users, :status_confirmed
    remove_column :users, :archived
  end
end
