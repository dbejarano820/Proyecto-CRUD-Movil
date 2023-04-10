require_relative "boot"
require "action_view/railtie"
require "action_cable/engine"

require "rails"
%w[
  active_model/railtie
  active_job/railtie
  active_record/railtie
  active_storage/engine
  action_controller/railtie
  action_mailer/railtie
  action_mailbox/engine
  action_text/engine
  action_view/railtie
  action_cable/engine
  sprockets/railtie
].each do |railtie|
  begin
    require "#{railtie}"
  rescue LoadError
  end
end

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsServer
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
    config.api_only = false

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
    
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head],
          expose: ['Authorization'] # Add any custom headers you want to expose here
      end
    end
  end
end
