class HomeController < ApplicationController
	def index
	end

	def step1
		respond_to do |format|
			format.html
			format.js
		end
	end

	def step2
		respond_to do |format|
			format.html
			format.js
		end
	end

	def step3
		respond_to do |format|
			format.html
			format.js
		end
	end
end