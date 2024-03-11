import React from 'react';
import logo from './logo.svg';
import './App.css';

const AboutMePage = () => {
	return (
		<div>
		<h1 style={{ color: 'purple' }}>About Me Page</h1>
		<h2>By Reed Stallman</h2>
		<hr />
			<div className="hobbies">
				<h4>Hobbies:</h4>
				<p> I have a few hobbies recently I have gotten into miniature painting and building, but a long-standing hobby I have had is playing video games in my free time. Some of the games I enjoy playing the most are the Dark Souls series, hack and slash games, and the occasional RTS game.
				</p>
			</div>
		<hr />
		<img src="https://media1.tenor.com/m/NpZU7naLdj4AAAAC/it-would-be-so-awesome-it-would-be-so-cool.gif" alt="It would be so awesome, it would be so cool" className="center"/>
		<hr />
		<div className="experience">
			<h4>CS Experience:</h4>
			<p>I have been writing code and taking computer science courses for quite a few years, and I have used a wide variety of compilers, IDEs, and languages from stranger ones like Kotlin (a language for creating android APK's) to more well-known languages like Java and C++.
			</p>
		</div>
		<hr />
		<img src="https://media1.tenor.com/m/yCbf5M7FPa8AAAAC/garfield-dancing.gif" alt="what can I say it's Garfield" className="center"/>
		<hr />
		<div className="art">
			<h4>Ascii Art</h4>
			<p dangerouslySetInnerHTML={{ __html: `
				<br />⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
				<br />⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
				<br />⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀
				<br />⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀
				<br />⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆
				<br />⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿
				<br />⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀
				<br />⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
				<br />⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
				<br />⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
				<br />⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
				<br />⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀
				<br />⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
				<br />⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
				<br />⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉
			` }}>
		        </p>
			<p dangerouslySetInnerHTML={{ __html: `
				<br>▒▒▒░░░░░░░░░░▄▐░░░░
				<br>▒░░░░░░▄▄▄░░▄██▄░░░
				<br>░░░░░░▐▀█▀▌░░░░▀█▄░
				<br>░░░░░░▐█▄█▌░░░░░░▀█▄
				<br>░░░░░░░▀▄▀░░░▄▄▄▄▄▀▀
				<br>░░░░░▄▄▄██▀▀▀▀░░░░░
				<br>░░░░█▀▄▄▄█░▀▀░░░░░░
				<br>░░░░▌░▄▄▄▐▌▀▀▀░░░░░
				<br>░▄░▐░░░▄▄░█░▀▀░░░░░
				<br>░▀█▌░░░▄░▀█▀░▀░░░░░
				<br>░░░░░░░░▄▄▐▌▄▄░░░░░
				<br>░░░░░░░░▀███▀█░▄░░░
				<br>░░░░░░░▐▌▀▄▀▄▀▐▄░░░
				<br>░░░░░░░▐▀░░░░░░▐▌░░
				<br>░░░░░░░█░░░░░░░░█░░
				<br>░░░░░░▐▌░░░░░░░░░█░
			` }}>
			</p>
		</div>
		<p class="copypasta">
			<b>Hey look buddy, I'm an engineer. That means I solve problems, not problems like "What is beauty?" Because that would fall within the purview of your conundrums of philosophy. I solve practical problems, for instance: how am I going to stop some mean mother Hubbard from tearing me a structurally superfluous be-hind? The answer, use a gun, and if that don't work... Use more gun. Take for instance this heavy caliber tripod mounted lil' old number designed by me, built by me, and you best hope... Not pointed at you. </b>
		</p>
		<h3>
			<a href="https://github.com/Luftwaffle3/CSE-4500">Github link </a>
		</h3>
	</div>
	);
};

export default AboutMePage;