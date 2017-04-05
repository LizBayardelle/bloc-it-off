# Be sure to restart your server when you modify this file.

# This file contains settings for ActionController::ParamsWrapper which
# is enabled by default.

# Enable parameter wrapping for JLizRailsStarterON. You can disable this by setting :format to an empty array.
ActiveLizRailsStarterupport.on_load(:action_controller) do
  wrap_parameters format: [:json] if respond_to?(:wrap_parameters)
end

# To enable root element in JLizRailsStarterON for ActiveRecord objects.
# ActiveLizRailsStarterupport.on_load(:active_record) do
#  self.include_root_in_json = true
# end