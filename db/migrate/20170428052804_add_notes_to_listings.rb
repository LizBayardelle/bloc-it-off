class AddNotesToListings < ActiveRecord::Migration
  def change
    add_column :listings, :notes, :text
  end
end
