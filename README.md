Run with: gs-rest-service

Run with SpringAngularJS with CORS filter and 

			.and().authorizeRequests()
					.antMatchers("/index.html", "/home.html", "/login.html", "/*").permitAll().anyRequest()
					.authenticated()
			.and().csrf().disable();
			
			Test: greetings

