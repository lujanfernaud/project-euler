puts
puts 'Project Euler Problem 2'
puts 'Even Fibonacci numbers'
puts 'Find the sum of the even-valued terms of the Fibonacci sequence (below 4000000)'
puts
puts 'Please introduce the limit:'
up_to = gets.chomp

fibonacci_sequence = [1, 2]
even_valued = []
result = 0
round = 0

puts
puts 'Creating fibonacci sequence...'
puts

fibonacci_sequence.each do |number|
	if fibonacci_sequence[-1] + fibonacci_sequence[-2] < up_to.to_i
		new_number = fibonacci_sequence[-1] + fibonacci_sequence[-2]
		sleep 0.2
		puts fibonacci_sequence[-1].to_s + ' + ' + fibonacci_sequence[-2].to_s + ' = ' + new_number.to_s
		fibonacci_sequence.push new_number
	end
end

fibonacci_sequence.each do |number|
	if number % 2 == 0
		even_valued.push number
	end
end

result = even_valued.reduce(:+)

puts
puts 'Sequence: ' + fibonacci_sequence.to_s
puts
sleep 0.5
puts 'Even valued terms in the sequence: ' + even_valued.to_s
puts
sleep 0.5
puts 'Result: ' + result.to_s
puts