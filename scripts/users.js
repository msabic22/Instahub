var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

currentUser = null;

//random users je set korisnika koji se nasumimćno predlažu za praćenje trenutnom korisniku
//u tom setu se nikad neće pronaći korisnici koje trenutni korisnik već prati

randomUsers = new Set();

postIDcounter = 0;

// nisan zna kako cu ubacit lokalni JSON pa su u user objektu pohranjeni svi podaci
// o svim korisnicima i svim njihovim postovima, te se objekt mijenja svakom promjenom
// na stranici, tako da podaci ostanu spremljeni bezobzira sa kojim se korisnikom netko ulogira

users = [
	{
		username:"RandomUser1", 
		fullName:"Random User1", 
		imagePath:"images/avatars/avatar-male2.png",
		likes:[
		],
		bookmarks:[
		],
		following:[
			"MiaKhalifa",
			"JohnnySins",
			"AlexGrey",
			"JordiElNino",
			"JuliaAnn",
			"KendraLust",
			"LisaAnn"
		],
		posts: [
		]
	},
	{
		username:"JuliaAnn", 
		fullName:"Julia Ann", 
		imagePath:"images/avatars/juliaann.png",
		likes:[
		],
		bookmarks:[
		],
		following:[
		],
		posts: [
			{
				postID:setPostID(),
				imagePath:"images/posts/juliaann1.jpg",
				location:"Kitchen",
				likers:[
				],
				description: "Baking cookies!",
				tags:[
					"#yummy",
					"#tasty"
				],
				comments: [
					{
						user:"JordiElNino",
						comment:"Dont eat everything, i will come by later"
					}
				]
			},
			{
				postID:setPostID(),
				imagePath:"images/posts/juliaann2.jpg",
				location:"Kitchen",
				likers:[
				],
				description: "Baking cookies AGAIN! just for @JordiElNino this time!",
				tags:[
					"#yummy",
					"#tasty"
				],
				comments: [
					{
						user:"JordiElNino",
						comment:"You better bake some more!"
					}
				]
			},
			{
				postID:setPostID(),
				imagePath:"images/posts/juliaann3.jpg",
				location:"Private Ordination",
				likers:[
				],
				description: "did mr. @JohnnySins already told you its flu season?",
				tags:[
					"#doctor",
					"#flu"
				],
				comments: [
					{
						user:"JohnnySins",
						comment:"Ofcourse!"
					}
				]
			}
		]
	},
	{
		username:"KendraLust", 
		fullName:"Kendra Lust", 
		imagePath:"images/avatars/kendralust.png",
		likes:[
		],
		bookmarks:[
		],
		following:[
			"JuliaAnn",
			"LisaAnn",
			"JordiElNino"
		],
		posts: [
			{
				postID:setPostID(),
				imagePath:"images/posts/kendralust1.jpg",
				location:"Basketbal Court",
				likers:[
				],
				description: "I like sitting on balls!",
				tags:[
				],
				comments: [
					{
						user:"JohnnySins",
						comment:"@JordiElNino Yeah, I bet she does!"
					},
					{
						user:"JordiElNino",
						comment:"@JohnnySins HE HE"
					}
				]
			},
			{
				postID:setPostID(),
				imagePath:"images/posts/kendralust2.jpg",
				location:"Dinner table",
				likers:[
				],
				description: "Lunch Time!! Can you eat everything?",
				tags:[
					"#yummy",
					"#tasty"
				],
				comments: [
				]
			}
		]
	},
	{
		username:"LisaAnn", 
		fullName:"Lisa Ann", 
		imagePath:"images/avatars/lisaann.png",
		likes:[
		],
		bookmarks:[
		],
		following:[
			"MiaKhalifa",
			"JohnnySins",
			"JordiElNino",
		],
		posts: [
			{
				postID:setPostID(),
				imagePath:"images/posts/lisaann1.jpg",
				location:"",
				likers:[
				],
				description: "You have the right to remain silent anything you can and will be used against you",
				tags:[
				],
				comments: [
				]
			},
			{
				postID:setPostID(),
				imagePath:"images/posts/lisaann2.jpg",
				location:"",
				likers:[
				],
				description: "business meeting",
				tags:[
				],
				comments: [
				]
			},
			{
				postID:setPostID(),
				imagePath:"images/posts/lisaann3.jpg",
				location:"",
				likers:[
				],
				description: "nice time for a walk outside",
				tags:[
				],
				comments: [
				]
			}
		]
	},
	{
		username:"JordiElNino", 
		fullName:"Jordi El Nino", 
		imagePath:"images/avatars/jordielnino.png",
		likes:[
		],
		bookmarks:[
		],
		following:[
			"LisaAnn",
			"KendraLust",
			"JuliaAnn",
			"AlexGrey",
			"MiaKhalifa"
		],
		posts: [
			{
				postID:setPostID(),
				imagePath:"images/posts/jordielnino1.jpg",
				location:"",
				likers:[
				],
				description: "helping with laundry",
				tags:[
				],
				comments: [
				]
			},
			{
				postID:setPostID(),
				imagePath:"images/posts/jordielnino2.jpg",
				location:"",
				likers:[
				],
				description: "helping with laundry AGAIN",
				tags:[
				],
				comments: [
					{
						user:"KendraLust",
						comment:"You are such a good boy, you should come by my place somethimes to help me out too!"
					}
				]
			},
			{
				postID:setPostID(),
				imagePath:"images/posts/jordielnino3.jpg",
				location:"",
				likers:[
				],
				description: "looks like were in touble @AlexGrey",
				tags:[
				],
				comments: [
					{
						user:"AlexGrey",
						comment:"@Oooops"
					}
				]
			}
		]
	},
	{
		username:"AlexGrey", 
		fullName:"Alex Grey", 
		imagePath:"images/avatars/alexgrey.png",
		likes:[
		],
		bookmarks:[
		],
		following:[
			"RandomUser1",
		],
		posts: [
			{
				postID:setPostID(),
				imagePath:"images/posts/alexgrey1.jpg",
				location:"",
				likers:[
				],
				description: "Im so clumsy",
				tags:[
				],
				comments: [
				]
			}
		]
	},
	{
		username:"MiaKhalifa", 
		fullName:"Mia Khalifa", 
		imagePath: "images/avatars/miakhalifa.png",
		likes:[
		],
		bookmarks:[
		],
		following:[
			"JohnnySins"
		],
		posts: [
			{
				postID:setPostID(),
				imagePath:"images/posts/miakhalifa1.png",
				location:"School library",
				likers:[
				],
				description: "Studying hard",
				tags:["#schoolgirl","#schooluniform","#library","#nerdy"],
				comments: [
					{
						user:"JohnnySins",
						comment:"nice dress "
					}
				]
			}
		]
	},
	{
		username:"JohnnySins", 
		fullName:"Johnny Sins", 
		imagePath: "images/avatars/johnnysins.png",
		likes:[
		],
		bookmarks:[
		],
		following:[
			"MiakHalifa"
		],
		posts: [
			{
				postID:setPostID(),
				imagePath:"images/posts/johnnysins1.png",
				location:"Private ordination",
				likers:[
				],
				description:"Don't forget to check yourself out, it's flu season",
				tags:["#doctorSins","#flu","#stethoscope"],
				comments: [
					{
						user:"MiaKhalifa",
						comment:"Are you free today? I would like to come this afternoon"
					},
					{
						user:"JohnnySins",
						comment:"15:00. Don't be late!"
					}
				]
			}
		]
	}
];


// pošto stalno čistim feed i ponovno ga stvaram funkcijama emptyFeed() i displayFeed()
// post se u feed može nadodati samo ako prođe conditionCheck()
// a i na ovaj način sam ostavio mogučnost za  nadograndnju stranice što mi je bilo u planu
// npr pritiskom na bilokoji tag bilokoje slike se prikazuju ostale slike s istim tagom
// zbog toga je user.post.tags lista a ne obićni string

conditions={
	username: null,
	keyword: null,
	locationKeyword: null,
	tag: null,
	likesFrom:null,
	bookmarksFrom:null
};

//prikaz crnoga ekrana na početku
showModal();

// prikaz korisnika u crnom ekranu na početku, iz ove funkcije preko handleProfileClick()
// sakriva modal i prikazuje stvarnu stranicu
displayModalUsers();


//ceka klik na dodavanje nove objave
document.querySelector(".add-new-post").addEventListener("click",handleNewPost);

//ceka klik na srce u headeru, prikaz postova koje je trenutni korisnik do sada lajkao
document.querySelector(".show-likes").addEventListener("click",handleShowLikesClick);

//ceka klik na profil u headeru, prikaz postova koje je trenutni korisnik objavio
document.querySelector(".my-profile").addEventListener("click",handleMyProfileClick);

//ceka klik na logout ikonu u headeru, ponovni prikaz modala
document.querySelector(".change-user").addEventListener("click",handleChangeProfileClick);

//ceka klik na bookmark u headeru, prikaz postova koje je trenutni korisnik oznacio
document.querySelector(".show-bookmarks").addEventListener("click",handleShowBookmarksClick);

//za ove prethodne cetri funkcije vrijedi da se klikom na istu ikonu korisnika vraca
//na njegov feed, a klikom na neku drugu ikonu u drugo stanje
//nije moguce u isto vrijeme prikazati presjek npr lajkanih i bookmarkanih slika
//iako mislim da je to moguce odraditi preko promjene vise conditions vrijednosti


//ceka upisivanje u trazilicu u headeru
document.querySelector("#search-box").addEventListener("keyup",handleTextInput);

//prikazuje feed na osnovi upisanoga u trazilicu u headeru
function handleTextInput(e){
	let inputElement = e.currentTarget;
	let text = inputElement.value;
	conditions.keyword = text;
	feedContainer = document.querySelector(".feed");
	emptyContainer(feedContainer);
	displayFeed();
} 

//prikazuje crni zaslon pri logiranju
function showModal() {

 	modal.style.display = "block";
 	document.querySelector("header").classList.add("hide");
}

//prikazuje korisnike u modalu i vodi na feed odabranog korisnika
function displayModalUsers(){

	modalContainer = document.querySelector(".modal-content");
	if(modalContainer.firstChild){
		return;
	}
	for(const user of users){
		newProfileBox = createProfileBox(user);
		newProfileBox.querySelector(".profile-picture").addEventListener("click", handleProfileClick);
		newProfileBox.querySelector(".fullName-paragraph").addEventListener("click", handleProfileClick);
		newProfileBox.querySelector(".username-paragraph").remove();
		newProfileBox.querySelector(".follow-button").remove();
		modalContainer.append(newProfileBox);
	}
}

//prima objekt user iz liste objekata users
//vraca univerzalnu kutiju sa slikom, nadimkom i punim imenom korisnika,
function createProfileBox(user){

	let profileBoxTemplate = document.querySelector("#profile-box-template");
	let newProfileBox = document.importNode(profileBoxTemplate.content, true);
	profilePicture = newProfileBox.childNodes[1].childNodes[1]
	profilePicture.src = user.imagePath;
	newProfileBox.childNodes[1].childNodes[3].innerHTML = user.username;
	newProfileBox.childNodes[1].childNodes[5].innerHTML = user.fullName;

	return newProfileBox;
}

//pritisak na ikonu profila u headeru
function handleProfileClick(e){
	let profile = e.currentTarget.parentElement;
	fullname = profile.querySelector(".fullName-paragraph").textContent;
	currentUser = findUser(fullname);
	displayCurrentUser(currentUser);
	modal.style.display = "none";
	randomUsers.clear();
 	document.querySelector("header").classList.remove("hide");
	displaySuggestionsSidebar();
	displayFeed(conditions);
	displayFollowing();
}

//na temelju prosljedenoga stringa usernamea, vraca user objekt sa svim podacima o korisniku
function findUser(username){
	for(const user of users){
		if(username == user.username){
			return user;
		}
		else if(username == user.fullName){
			return user;
		}
	}
	if(typeof user != users[0]){
		console.log("user "+username+" not found");
	}
}

//prikazuje podatke vezane za trenutnoga korisnika
function displayCurrentUser(user){
	let sidebarElement = document.querySelector(".sidebar");
	if(sidebarElement.firstElementChild.classList[0] == "profile-container"){
		sidebarElement.removeChild(sidebarElement.childNodes[1]);
		currentUser = user;
		user = currentUser;
	}

	let profileBox = createProfileBox(user);

	profileBox.querySelector(".profile-picture").style.maxWidth = "4em";
	profileBox.querySelector(".profile-picture").style.borderWidth = "0.2em";
	profileBox.querySelector(".follow-button").remove();
	sidebarElement.prepend(profileBox);
	updateFollowersSidebar();
	updateLikesSidebar();
	updateBookmarksSidebar();
}

//prikazuje feed
//određuje kada će se pojaviti suggestion container u feedu
function displayFeed(){

	feedContainer =document.querySelector(".feed");
	emptyContainer(feedContainer);

	let suggestionsAfterPost = 1;
	let postCounter = 0;

	

	for(const followingUser of currentUser.following){
		user = findUser(followingUser);
		for(const post of user.posts){

			if(checkConditions(post,user.username)){
			postCounter=postCounter+1;
			displayPost(post, user);
			}
			
			if(postCounter == suggestionsAfterPost){
				displaySuggestionsFeed();
			}
		}
	}

	for(const post of currentUser.posts)
	{
		if(checkConditions(post,currentUser)){
		postCounter=postCounter+1;
		displayPost(post, currentUser);
		}
		
		if(postCounter == suggestionsAfterPost){
			displaySuggestionsFeed();
		}
	}
}

//provjerava uvjete koje post mora zadovoljiti da bi bio objavljen u određenome feedu
//koristi globalnu varijablu conditions

function checkConditions(post,username){
	if(conditions.username != null){
		if(conditions.username != username){
			return false;
		}
	} else if(conditions.keyword != null){
		if(!post.description.includes(conditions.keyword)){
			return false;
		}
	} else if(conditions.tag != null){
		for(const tag of post.tags){
			if(conditions.tag != tag){
				return false;
			}
		}
	} else if(conditions.locationKeyword != null){
		if(conditions.locationKeyword != post.location){
			return false;
		}
	}else if(conditions.likesFrom != null){
		if(post.likers.length == 0){
			return false;
		}
		for(const liker of post.likers){
			if(conditions.likesFrom == liker){
				return true;
			}
		}
		return false;
	}else if(conditions.bookmarksFrom != null){
		bookmarksFrom = findUser(conditions.bookmarksFrom);
		for(const bookmarkID of bookmarksFrom.bookmarks){
			if(bookmarkID == post.postID){
				return true;
			}
		}
		return false;

	}
	return true;
}

//uzima bilokakav kontenjener i prazni ga
function emptyContainer(container){
	while (container.firstChild) {
    	container.firstChild.remove();
	}
}

//prikazuje jednu objavu, komentare na njoj i sve vezano za nju
//da bi se objava prikazala, mora proći uvjete u funkciji displayFeed();
//totalni đumbus od funkcije
function displayPost(post,user){
	
	let postTemplate = document.querySelector("#post");
    let blankElement = document.importNode(postTemplate.content, true);

    blankElement.querySelector("article").setAttribute("id", post.postID);
	blankElement.querySelector(".profile-picture").src = user.imagePath;
	blankElement.querySelector(".profile-picture").style.maxWidth = "4em";
	blankElement.querySelector(".profile-picture").style.borderWidth = "0.2em";
	blankElement.querySelector(".username-post").innerHTML = user.username;
	blankElement.querySelector(".location-paragraph").innerHTML = post.location;
	blankElement.querySelector(".image-post").src = post.imagePath;
	blankElement.querySelector(".username-description").innerHTML = user.username;
	blankElement.querySelector(".description").innerHTML = post.description;
	insertTags(blankElement.querySelector(".tags"), post);

	commentsElement = blankElement.querySelector(".comments-container");

	heartElement = blankElement.querySelector(".fa-heart");
	likeCounter = blankElement.querySelector(".likes-count");
	if(heartElement.classList.contains("far") && post.likers.includes(currentUser.username)){
		heartElement.classList.remove("far");
		heartElement.classList.add("fas");
    	heartElement.style.color = "var(--primary-color)";
	}
	addClickHandlerHeart(heartElement, likeCounter, post);

	bookmarkElement = blankElement.querySelector(".fa-bookmark");

	if(bookmarkElement.classList.contains("far") && currentUser.bookmarks.includes(post.postID)){
		bookmarkElement.classList.remove("far");
		bookmarkElement.classList.add("fas");
    	bookmarkElement.style.color = "var(--primary-color)";
	}
	addClickHandlerBookmark(bookmarkElement, post);

	for(const comment of post.comments){
		showComment(comment.user, comment.comment,commentsElement);
	}

	blankElement.querySelector(".comment-icon").addEventListener("click",handleCommentIconClick);
	blankElement.querySelector(".send-button").addEventListener("click",handleSendCommentClick);

	let feed = document.querySelector(".feed").appendChild(blankElement);

	updateLikes(post,likeCounter);
}

//ubacuje tagove u kontenjer tagovi na objavi, poziva je displayPost
function insertTags(tagsContainer, post){
	for(const tag of post.tags){
		let tagSpan =  document.createElement("span");
		let textNode = document.createTextNode(tag);	
		tagSpan.appendChild(textNode);
		tagsContainer.appendChild(tagSpan);
	}
}

//dodaje jedan komentar u kontenjer komentara na objavi
function showComment(user, comment, commentsContainer){
	let blankComment = document.querySelector("#comment-template");
	let newComment = document.importNode(blankComment.content, true);
	newComment.querySelector(".comment-user").innerHTML = user;
	newComment.querySelector(".comment-comment").innerHTML = comment;
	commentsContainer.appendChild(newComment);
}

//racuna koje korisnike trenutni korisnik ne prati, i svaki put nasumičnim poretkom prikazuje
//kao prijedloge, određuje također i koliko će se prijedloga prikazati
//prijedloge vuće iz randomUsers globalne varijable
function displaySuggestionsSidebar(){
	let container = document.querySelector(".suggested-container");
	emptyContainer(container);
	let numberOfSuggestions = 10;
	let possibleSuggestions = users.length - currentUser.following.length - 1;
	console.log(possibleSuggestions);

	if(possibleSuggestions < numberOfSuggestions){
		numberOfSuggestions = possibleSuggestions;
	}

	while(randomUsers.size < numberOfSuggestions){
		let randomUser = users[Math.floor(Math.random() * users.length)];

		if(currentUser.following.includes(randomUser.username)){
			continue;
		}
		if(randomUser.username != currentUser.username){
				randomUsers.add(randomUser);
		}
	}

	for (const user of randomUsers) {
		newProfileBox = createProfileBox(user);
		newProfileBox.querySelector(".fullName-paragraph").remove();
		newProfileBox.querySelector(".profile-picture").style.maxWidth = "3em";
		newProfileBox.querySelector(".profile-picture").style.borderWidth = "0.2em"
		newProfileBox.querySelector("img").classList.add("sidebar-image");
		newProfileBox.querySelector("img").style.margin = "0px";
		newProfileBox.childNodes[1].style.flexDirection = "row";
		newProfileBox.childNodes[1].style.padding = "0px";
		newProfileBox.querySelector(".follow-button").addEventListener("click",handleFollowClick);

		container.appendChild(newProfileBox);
	}
	container.classList.add("suggested-sidebar","flex-space-between","flex-center");
}

//prikazuje prijedloge u feedu, između objava
function displaySuggestionsFeed(){

	if(document.querySelector(".suggestion-container-feed"))
	{
		return;
	}

	let  count = 0;
	for(const user of randomUsers){
		count++;
	}
	if(count<1){
		return;
	}

	let container = document.createElement('div');
	container.classList.add("suggestion-container-feed","frame");

	for(const user of randomUsers){
		newProfileBox = createProfileBox(user)
		newProfileBox.querySelector(".fullName-paragraph").remove();
		newProfileBox.querySelector(".follow-button").addEventListener("click",handleFollowClick);
		container.appendChild(newProfileBox);

	}
	document.querySelector(".feed").appendChild(container);
}

//prikazuje listu ljudi koje trennutni korisnik prati
function displayFollowing(){
	let container = document.querySelector(".following-container");
	emptyContainer(container);
	for (const following of currentUser.following) {
		let user = findUser(following);

		newProfileBox = createProfileBox(user);
		newProfileBox.querySelector(".fullName-paragraph").remove();
		newProfileBox.querySelector(".follow-button").remove();
		newProfileBox.querySelector(".profile-picture").style.maxWidth = "3em";
		newProfileBox.querySelector(".profile-picture").style.borderWidth = "0.2em"
		newProfileBox.querySelector("img").classList.add("sidebar-image");
		newProfileBox.querySelector("img").style.margin = "0px";
		newProfileBox.childNodes[1].style.flexDirection = "row";
		newProfileBox.childNodes[1].style.padding = "0px";

		container.appendChild(newProfileBox);
	}
}

//klik na srce u headeru, za prikazivanje lajkanih slika trenutnog korisnika
function addClickHandlerHeart(heartElement, likeCounter, post) {
    heartElement.addEventListener('click', function(e) {

    	if(heartElement.classList.contains("far")){
    		heartElement.classList.remove("far");
    		heartElement.classList.add("fas");
    		heartElement.style.color = "var(--primary-color)";

    		post.likers.push(currentUser.username);
    		currentUser.likes.push(post.postID);
    		updateLikes(post, likeCounter);
    	}else{
    		heartElement.classList.remove("fas");
    		heartElement.classList.add("far");
    		heartElement.style.color = "var(--light-primary-color)";
    		post.likers.pop(currentUser.username);
    		currentUser.likes.pop(post.postID);
    		updateLikes(post, likeCounter);
    	}

    }, false);
}

//osvježava broj lajkova na slici
function updateLikes(post,likeCounter){
	likeCounter.innerHTML =  post.likers.length;
	updateLikesSidebar();
}

//osvjžava broj lajkova trenutnog korisnika
function updateLikesSidebar(){
	document.querySelector(".like-count-sidebar").innerHTML = currentUser.likes.length;
}

//klik na bookmark u headeru
function addClickHandlerBookmark(bookmarkElement, post) {
    bookmarkElement.addEventListener('click', function(e) {

    	if(bookmarkElement.classList.contains("far")){
    		bookmarkElement.classList.remove("far");
    		bookmarkElement.classList.add("fas");
    		bookmarkElement.style.color = "var(--primary-color)";

    		currentUser.bookmarks.push(post.postID);
    		updateBookmarksSidebar();
    	}else{
    		bookmarkElement.classList.remove("fas");
    		bookmarkElement.classList.add("far");
    		bookmarkElement.style.color = "var(--light-primary-color)";
    		currentUser.bookmarks.pop(post.postID);
    		updateBookmarksSidebar();
    	}

    }, false);
}

//osvježavanje broja bookmarka korisnika
function updateBookmarksSidebar(){

	document.querySelector(".bookmark-count-sidebar").innerHTML = currentUser.bookmarks.length;
}

//osvježavanje broja followera korisnika
function updateFollowersSidebar(){

	document.querySelector(".following-count-sidebar").innerHTML = currentUser.following.length;
	displayFollowing();
}

//vraća globalnu varijablu conditions na početne uvjete
function resetConditions() {
    Object.keys(conditions).forEach(function(k) {
        conditions[k] = null
    });
}

//klik na ikonu izlaz u headeru (logout neke vrste)
function handleChangeProfileClick(e){
	showModal();
	displayModalUsers();
}

//klik na ikonu profila u headeru, za prikaz objava trenutnog korisnika
function handleMyProfileClick(e){

	unclickIcon(document.querySelector(".show-likes"));	
	unclickIcon(document.querySelector(".show-bookmarks"));

	clickedElement = e.currentTarget;
	if(clickedElement.classList.contains("far")){
		clickedElement.classList.remove("far");
		clickedElement.classList.add("fas");
		conditions.username = currentUser.username;
	}else{
		clickedElement.classList.remove("fas");
		clickedElement.classList.add("far");
	}
	displayFeed();
	resetConditions();
}

//klik na srce u headeru, za prikaz slika koje je trenutni korisnik lajkao
function handleShowLikesClick(e){
	clickedElement = e.currentTarget;

	unclickIcon(document.querySelector(".my-profile"));	
	unclickIcon(document.querySelector(".show-bookmarks"));

	if(clickedElement.classList.contains("far")){
		clickedElement.classList.remove("far");
		clickedElement.classList.add("fas");
		conditions.likesFrom = currentUser.username;
	}else{
		clickedElement.classList.remove("fas");
		clickedElement.classList.add("far");
	}
	displayFeed();
	resetConditions();
}

//klik na bookmark u headeru, za prikaz slika koje je trenutni korisnik oznacio
function handleShowBookmarksClick(e){
	clickedElement = e.currentTarget;

	unclickIcon(document.querySelector(".my-profile"));	
	unclickIcon(document.querySelector(".show-likes"));


	if(clickedElement.classList.contains("far")){
		clickedElement.classList.remove("far");
		clickedElement.classList.add("fas");
		conditions.bookmarksFrom = currentUser.username;
	}else{
		clickedElement.classList.remove("fas");
		clickedElement.classList.add("far");
	}
	displayFeed();
	resetConditions();
}

//objava komentara na slici
function handleSendCommentClick(e){
	newCommentString = e.currentTarget.parentElement.querySelector("#comment-input").value;
	if(newCommentString === ""){
		alert("Comment can't be empty");
		return;
	}
	postID = e.currentTarget.parentElement.parentElement.getAttribute('id');
	post = findPostByID(postID);
	newComment = {
		user:currentUser.username,
		comment:newCommentString
	}
	post.comments.push(newComment);
	displayFeed();
}

//klik na ikonu za slanje komentara
function handleCommentIconClick(e){

	e.currentTarget.parentElement.parentElement.parentElement.querySelector("#comment-input").focus();
}


//pronalazi post po IDu, vraća objekt iz liste users.posts
//ovo sam koristio u paru sa dodavanjem IDa na html article za svaku sliku
//da sam se toga sjetio ranije neke stvari san mozda moga elegantnije rješit

function findPostByID(targetID){
	for(const user of users){
		for(const post of user.posts){
			if(targetID == post.postID){
				return post;
			}
		}
	}
}

//svakoj slici pridaje jedinstveni ID
function setPostID(){
	postIDcounter++;
	return postIDcounter;
}

//klik na dodavanje nove slike
function handleNewPost(){
	if (confirm('Do you want to add a new post?')) {
    	let newPath = prompt("Image path:", "images/posts/miakhalifa1.png");
    	let newLocation = prompt("location:", "asd");
    	let newDescription = prompt("description:", "asd");
    	let newTags = prompt("tags:", "asd");
    	newTags = newTags.split(" ");
    	for(let tag in newTags){
    		if(tag[0] != '#'){
    			tag = "#"+tag;
    		}
    	}
    	let newPost = {
				postID:setPostID(),
				imagePath:newPath,
				location:newLocation,
				likers:[
				],
				description: newDescription,
				tags:newTags,
				comments: [
				]
			}
		currentUser.posts.push(newPost);
	}
	displayFeed();
}

//pretvara ikonicu iz pune u praznu, i ovoga san se moga siti ranije pa koristit na vise mista
function unclickIcon(element){
	if(element.classList.contains("fas")){
		element.classList.remove("fas");
		element.classList.add("far");
	}
}

//klik na botun follow, bilo u sidebaru ili feedu,
//miće korisnika iz oba kontenjera prijedloga i stavlja ga u listu ljudi koje trenutni korisnik prati
function handleFollowClick(e){
	username = e.currentTarget.parentElement.querySelector(".username-paragraph").textContent;
	user = findUser(username);
	randomUsers.delete(user);
	currentUser.following.push(user.username);
	updateFollowersSidebar();

	removeFromSuggestions(user);
	displaySuggestionsFeed();

	displaySuggestionsSidebar();
	displayFeed();
}

//poziv iz prethodne funkcije
function removeFromSuggestions(user){

	suggestionsFeed = document.querySelector(".suggestion-container-feed");
	if(document.querySelector(".suggestion-container-feed") != null){
		profileElementsFeed = suggestionsFeed.querySelectorAll(".profile-container")
		for(const profile of profileElementsFeed){
			if(profile.textContent.includes(user)){
				profile.remove();
			}
		}
	
	}
	suggestionsSidebar = document.querySelector(".suggested-sidebar");
	profileElementsSidebar = suggestionsSidebar.querySelectorAll(".profile-container")
	for(const profile of profileElementsSidebar){
		if(profile.textContent.includes(user)){
			profile.remove();
		}
	}

}