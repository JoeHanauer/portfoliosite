	$('.hangout').click(function (){
		$('.workingpage').hide();
		$('.ridingpage').hide();
		$('.listeningpage').hide();
		$('.readingpage').hide();
		$('.hangoutpage').show();
		});



	$('.working').click(function (){
		$('.workingpage').show();
		$('.ridingpage').hide();
		$('.listeningpage').hide();
		$('.readingpage').hide();
		$('.hangoutpage').hide();
		});

	$('.reading').click(function (){
		$('.readingpage').show();
		$('.workingpage').hide();
		$('.listeningpage').hide();
		$('.ridingpage').hide();
		$('.hangoutpage').hide();

		});

	$('.listening').click(function (){
		$('.listeningpage').show();
		$('.workingpage').hide();
		$('.readingpage').hide();
		$('.ridingpage').hide();
		$('.hangoutpage').hide();
		});

	$('.riding').click(function (){
		$('.ridingpage').show();
		$('.workingpage').hide();
		$('.listeningpage').hide();
		$('.readingpage').hide();
		$('.hangoutpage').hide();

		});
