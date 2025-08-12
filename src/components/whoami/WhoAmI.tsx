export default function WhoAmI() {

    return (
        <div>
            <h1 className="pt-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white">
                Who Am I ?
            </h1>
            <p className="pl-32 pr-32 justify-items-center">
                My name is Pierre Kerlau I am a 23 years old computer science student. <br/>
                Currently in Year 3 of a five-year Diplôme d’ingénieur program (MSc equivalent) enrolled at CESI Graduate School of Engineering in France, I am seeking a 12-weeks internship in software development as part of my academic program.
            </p>
            <div className="pt-10 justify-items-center">
                <img alt="me" src="./public/images/me.png"></img>
                <p className="italic text-gray-400 dark:text-gray-400">Photo of me, associate degree graduation day. 2024</p>
            </div>
        </div>
    );
}