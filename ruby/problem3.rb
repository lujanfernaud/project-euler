puts
puts 'Project Euler Problem 3'
puts 'Largest prime factor'
puts 'Calculate the largest prime factor of the number (600851475143)'
puts
puts 'Please introduce the number:'
number = gets.chomp.to_i

factors = []
largest_factor = 0
i = 2

puts
puts 'Calculating factors...'

if number > 1
	while i <= number
		while number % i == 0
			factors.push i
			puts
			puts number.to_s + ' / ' + i.to_s
			sleep 0.3
			number = number / i
			puts number
			sleep 0.5
		end
		i += 1
	end
	largest_factor = factors.last
end

puts
puts 'Prime factors: ' + factors.to_s
puts
puts 'Largest factor: ' + largest_factor.to_s
puts