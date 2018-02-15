TITLE Sorting Random Integers     (sortingRandomIntegers.asm)

; Author: Alex Ramsdell
; 271 / Project #4                 
; Date:8/6/2017
; Description: Accept a number [10 .. 200] of random integers to generate in range [100 .. 999]. Generate an array of those integers,
; show the integers pre-sorted, sort the integers, show the median value, and print the sorted array.  The sort algorithm
; used is bubblesort. 

INCLUDE Irvine32.inc

.data

	; User Output 
	tabString				BYTE "    ", 0
	instructionsHeader		BYTE "Sorting Random Numbers, by Alex Ramsdell", 0 
	instructionsMain		BYTE "This program generates random numbers in the range [100 .. 999], displays the original list, sorts the list, and calculates the median value. Finally, it displays the list sorted in descending order.", 0
	totalNumbersPrompt		BYTE "How many numbers should be generated? [10 .. 200]: ", 0
	outOfRangeMsg			BYTE "Invalid input!", 0
	medianMsg				BYTE "The Median is: ", 0
	unsortedMsg				BYTE "The unsorted random integers: ", 0
	sortedMsg				BYTE "The sorted list: ", 0
	swapMsg					BYTE "SWAP!", 0
	noswapMsg				BYTE "NO SWAP", 0


	; Numeric Data
	MIN	= 10
	MAX = 200
	LO = 100
	HI = 999
	MAX_INDENT_PER_LINE = 10
	lineCount				DWORD	0
	isValidInput			DWORD	0
	totalNumbersRequest		DWORD	0	
	list					DWORD	200 DUP(?)
	listSum					DWORD	0
	i						DWORD	0
	j						DWORD	4
	swaps					DWORD	0

.code

introduction PROC

	mov		edx, OFFSET instructionsHeader
	call	WriteString
	call	CrLf

	mov		edx, OFFSET instructionsMain
	call	WriteString

	call	CrLf
	
	ret

introduction ENDP

getData PROC

	; params: @totalNumbersRequest
	; returns: none

	; stack
	; ebp
	; ret + 4
	; @totalNumbersRequest + 8

	; save base pointer, move stack pointer to base pointer
	; move prompt offset addr into edx and print the prompt
	; read the user input into eax 
	; copy that value into the address pointed to by the single proc param.

	; setup
	push	ebp
	mov		ebp, esp

	; print global prompt
	mov		edx, OFFSET totalNumbersPrompt
	call	WriteString

	; read user's answer into eax
	call	ReadInt

	; assign address of request to ebx
	mov		ebx, [ebp + 8]

	; write integer value to address location of request stored in ebx
	mov		[ebx], eax

	; teardown
	pop		ebp
	ret		4

getData	ENDP

validate PROC

	; setup
	push	ebp
	mov		ebp, esp
	
	; stack:
	; ebp
	; ret + 4
	; isValidInput + 8
	; totalNumbersRequest + 12

	; copy totalNumbersRequest addr into ebx
	mov	ebx, [ebp + 12]

	; copy deref'd value into eax
	mov eax, [ebx]

	;compare min with deref'd numrequest
	mov ebx, MIN
	cmp eax, ebx
	jl	badInput

	mov ebx, MAX
	cmp eax, ebx
	jg  badInput

	jmp continue
    
	badInput:
		; print no good, and set isValidInput to false, 0

		mov		edx, OFFSET outOfRangeMsg
		call	WriteString
		call	CrLf

		; move isValidInput address to ebx
		; deref and set value at address to 0
		mov		ebx, [ebp + 8]
		mov		eax, 0
		mov		[ebx], eax
		pop		ebp
		ret		8

	continue:
		; set isValidInput to 1, true
		mov		ebx, [ebp + 8]
		mov		eax, 1
		mov		[ebx], eax
		pop		ebp
		ret		8

validate ENDP

showArray PROC

	; fill an array with n random numbers
	; params: @list, totalNumbersRequest, lineCount
	; return value: none

	; stack:
	; ebp
	; ret + 4
	; lineCount + 8
	; totalNumbersRequest + 12
	; list address + 16
	; listTitle + 20


	push	ebp
	mov		ebp, esp

	; print list title
	mov		edx, [ebp + 20]
	call	WriteString
	call	CrLf

	; set the loop counter to desired count of random numbers
	mov		ecx, [ebp + 12]

	; set source index to address of array
	mov		esi, [ebp + 16]

	fill:
		; put value at source index into eax, print it
		mov		eax, [esi]
		call	WriteDec

		; print a tab
		mov		edx, OFFSET tabString
		call	WriteString
		
		; increment line count
		mov		eax, [ebp + 8]	; address of linecount to ebx
		inc		eax				; value at address of line count to eax
		mov		[ebp + 8], eax

		; determine if we need to print a newline (counter % 10 === 0)
		mov		edx, 0
		cdq
		mov		ebx, MAX_INDENT_PER_LINE
		div		ebx
		cmp		edx, 0

		; if so, print and continue
		je		lineBreak

		; otherwise just continue
		jmp		continue

	lineBreak:
		call	CrLf
		;	reset linecount to 0
		jmp		continue

	continue:
		add		esi, 4
		loop fill

	call CrLf
	pop		ebp
	ret		16

showArray ENDP

fillArray PROC

	; fill array with pseudo-random numbers
	; parameters: totalNumbersRequest, @list
	; return value: none

	push	ebp
	mov		ebp, esp

	; stack:
	; ebp
	; ret			 		+ 4
	; totalNumbersRequest	+ 8
	; @list					+ 12

	; set the counter to deref'd stack offset value for number request. 
	mov		ecx, [ebp + 8]

	; set source index to start address of array
	mov		esi, [ebp + 12]

	fill:
		; get current array index by subtracting the counter from the length of the array to get the count
		mov		ebx, [ebp + 8]	; address of totalNum
		sub		ebx, ecx 		; counter

		;ebx holds the current array index to write the number into
		;generate the pseudorandom number and insert into array at index

		mov		eax, HI
		sub		eax, LO
		inc		eax
		call	RandomRange
		add		eax, LO
		
		; insert random value into esi
		mov		[esi], eax

		; increment pointer to next address in array
		add		esi, 4
		loop	fill

	pop ebp
	ret 8
fillArray ENDP

displayMedian2 PROC
	push ebp
	mov ebp, esp

	; stack:
	;	ebp
	;	ret				+ 4
	;	#Request		+ 8
	;	@list			+ 12
	mov esi, [ebp + 12]

	mov	eax, [ebp + 8]
	mov ebx, 2
	cdq
	mov	edx, 0
	div ebx

	mov edx, eax ; save div result in edx
	mov eax, [esi + edx*4]
	call WriteDec
	call CrLf

	pop ebp
	ret 8
displayMedian2 ENDP

displayMedian PROC
	
	; displayMedian: shows the median of a list of numbers
	; arguments: totalNumbersRequest, @list, listSum
	; return value: none

	push ebp
	mov ebp, esp

	; stack:
	;	ebp
	;	ret + 4
	;	totalNumbersRequest + 8
	;	list + 12
	;	listSum + 16

	; set the counter to deref'd stack offset value for number request. 
	mov		ecx, [ebp + 8]

	; set source index to start address of list
	mov		esi, [ebp + 12]

	findMedian:
		; get current array index by subtracting the counter from the length of the array to get the count
		;mov		ebx, [ebp + 8]	; address of totalNum
		;sub		ebx, ecx 		; counter

		;mov		eax, ebx

		; add value at esi to listSum
		mov	eax, [ebp + 16]
		add eax, [esi]
		mov [ebp + 16], eax


		; increment pointer to next address in array
		add		esi, 4
		loop	findMedian

	mov		eax, [ebp + 16]
	call	WriteDec
	call	CrLf

	pop ebp
	ret 12

displayMedian ENDP

sortList PROC
	
	push	ebp
	mov		ebp, esp

	; stack:
	;	ebp
	;	ret		+ 4
	;	j		+ 8
	;	i		+ 12
	;   swaps	+ 16
	;   total#	+ 20
	;	@list	+ 24

	
	setup:

		; POINT TO ARRAY START, INIT LOOP COUNTER
		; SET SWAPS TO 0
		
		; set i and j to 0 and 4
		mov		eax, 0
		mov		[ebp + 12], eax

		mov		eax, 4
		mov		[ebp + 8], eax

		; set swaps to 0
		mov		eax, 0
		mov		[ebp + 16], eax

		; mov address of array into esi
		mov		esi, [ebp + 24]

		; set loop counter to be number of elements in array - 1
		; - 1 to stay in range, since we check i and i + 4

		mov		ecx, [ebp + 20]
		dec		ecx

	resume:
		;  drops into iterate

	iterate:

		; LOOP COMPARE VALUES AT LIST[I] AND LIST[J]
		; IF ASCENDING, SWAP AND CONTINUE LOOPING

		; print loop counter
		;mov	eax, [ebp + 12]
		


		; mov i to edx
		; add edx to esi to get value at esi[i], store in eax
	
		mov		edx, [ebp + 12]
		mov		eax, [esi + edx]

		; do same for j, but store in ebx
		mov		edx, [ebp + 8]
		mov		ebx, [esi + edx]

		; if value at esi[i] is less than esi[j], swap
		cmp		eax, ebx
		jl		swap

		; increment i and j by 4
		; and iterate again
		mov		eax, [ebp + 12]
		add		eax, 4
		mov		[ebp + 12], eax

		mov		eax, [ebp + 8]
		add		eax, 4
		mov		[ebp + 8], eax

		loop iterate

	conclude:
		; LOOP HAS FINISHED, CHECK FOR IF SWAPS MADE AND IF SO
		; JUMP BACK TO SETUP TO REINIT AND THEN GO TO LOOP AGAIN

		; have no swaps occurred? if so, finish, otherwise, reset loop
		mov		eax, 0
		cmp		[ebp + 16], eax
		jg		setup


		pop		ebp
		ret		20	

	swap:

		; push offset, i and j onto stack and call swap routine
		push		OFFSET list
		push		[ebp + 8]	; j
		push		[ebp + 12]	; i
		call		exchange

		; increment 'swaps' value
		mov			eax, [ebp + 16]	; deref swaps address, store value in eax
		inc			eax				; inc swaps
		mov			[ebp + 16], eax	; copy back to stack loc

		; continue where we left off in loop
		jmp resume 
	


sortList ENDP

exchange PROC

	push ebp
	mov ebp, esp

	; stack:
	;	ebp
	;	ret		+ 4
	;	i		+ 8
	;	j		+ 12
	;   @list	+ 16

	mov	edx,	[ebp + 8]		; i's address to edx
	mov	eax,	[esi + edx]		; value at esi[i] to eax
	
	mov edx,	[ebp + 12]		; j's address to edx
	mov ebx,	[esi + edx]		; value at esi[j] to ebx

	mov edx, [ebp + 12]			; mov j offset to edx
	mov [esi + edx], eax		; mov val at eax to esi[j] offset 

	mov edx, [ebp + 8]			; mov i offset to edx
	mov [esi + edx], ebx		; mov val at ebx to esi[i] offset 
	
	pop ebp
	ret 12

exchange ENDP

main PROC

	call	introduction
	
	validateInput:

		push	OFFSET totalNumbersRequest
		call	getData

		push    OFFSET totalNumbersRequest
		push	OFFSET isValidInput
		call	validate

		mov		eax, isValidInput
		cmp		eax, 1

		jne		validateInput
		jmp		continue

	continue:
		; seed the random number function
		call	Randomize

		; fill array with random numbers in range
		push	OFFSET list
		push	totalNumbersRequest
		call	fillArray
		
		; display the unsorted array
		push	OFFSET unsortedMsg
		push	OFFSET list
		push	totalNumbersRequest
		push	lineCount
		call	showArray



		; sort the list using bubblesort
		push    OFFSET list
		push    totalNumbersRequest
		push	swaps
		push	i
		push	j
		call	sortList

		; calculate and display the median of the array, rounded to the nearest tenth 
		mov		edx, OFFSET medianMsg
		call	WriteString
		push	OFFSET list
		push	totalNumbersRequest
		call	displayMedian2

		; display the sorted list
		push	OFFSET sortedMsg
		push	OFFSET list
		push	totalNumbersRequest
		push	lineCount
		call	showArray

	exit
main ENDP
END main
