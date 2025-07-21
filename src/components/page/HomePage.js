import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-12">
            {/* <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] mb-10 text-center">Ermiyas Damte.</h1> */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-3xl">
                {/* Profile Image */}
                <div className="flex-shrink-0 flex items-center justify-center">
                    <img src="/photo.jpg" alt="Ermiyas Damte" className="rounded-full w-40 h-40 object-cover border-4 border-[var(--color-primary)] shadow-lg" />
                </div>
                {/* Intro Card */}
                <div className="bg-gradient-to-br  rounded-2xl  p-8 flex flex-col gap-6 w-full max-w-xl border">
                    <p className="text-xl md:text-2xl text-[var(--color-primary)] font-semibold">
                        Hi! I’m Ermiyas <span role="img" aria-label="wave">👋</span><br/>
                        <span className="block mt-2 text-white font-extrabold text-xl md:text-xl">Fullstack Developer & UI/UX Designer</span>
                        <span className="block mt-2  text-base font-normal">I craft seamless digital experiences, blending beautiful interfaces with robust, scalable code. Passionate about turning complex problems into elegant, user-centered solutions for web and mobile.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                        <a href="mailto:inbox@ermiyas.dev" className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[var(--color-primary)] text-black font-semibold shadow hover:bg-[var(--color-botton)] hover:text-white transition-colors text-lg">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.985-7.065v14h24v-14l-12.015 7.065zm11.985-9.065h-23.97l11.985 7.065 11.985-7.065z"/></svg>
                            Get In Touch
                        </a>
                        <a href="/Ermiyas Damte CV.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2  px-5 py-2 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold shadow hover:bg-[var(--color-primary)] hover:text-[var(--color-background-2)] transition-colors text-lg">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-7V3.5L18.5 9H13z"/></svg>
                            CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
