puts
puts 'Project Euler Problem 1'
puts 'Multiples of 3 and 5'
puts 'Find the sum of all the multiples of 3 or 5 of the number (below 1000)'
puts
puts 'Please introduce the limit:'
up_to = gets.chomp.to_i

numbers = [1]
multiples = []

while numbers.length < up_to-1
	numbers.push numbers.last+1
end

puts
puts 'Calculating multiples...'
puts

numbers.each do |number|	
	if number % 3 == 0 or number % 5 == 0
		multiples.push number
		if multiples.last != 3
			print ', ' + number.to_s
			sleep 0.03
		else
			print number.to_s
		end
	end
end

result = multiples.reduce(:+)

sleep 0.5

puts
puts
puts 'Result: ' + result.to_s
puts