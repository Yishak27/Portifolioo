import React, { useState, useEffect } from 'react';

export const FooterPage = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    useEffect(() => {
        setVisitorCount(Math.floor(Math.random() * 4001) + 1000);
    }, []);

    const year = new Date().getFullYear();
    return (
        <footer className="w-full flex flex-col items-center justify-center py-6 bg-[var(--color-background-2)]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 w-full max-w-xl">
                <span className="text-base font-light">&copy; {year} G.C</span>
            </div>
            <div className="mt-2 flex gap-4 items-center justify-center">
                <a href="https://www.linkedin.com/in/ermiyas-damte" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-botton)] transition-colors">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" /></svg>
                </a>
                <a href="mailto:inbox@ermiyas.dev" className="hover:text-[var(--color-botton)] transition-colors">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.985-7.065v14h24v-14l-12.015 7.065zm11.985-9.065h-23.97l11.985 7.065 11.985-7.065z" /></svg>
                </a>
                <a href="https://github.com/Yishak27" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-botton)] transition-colors">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.587 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                {/* Upwork */}
                <a href="https://www.upwork.com/freelancers/ermiyasdamte" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-botton)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#6fda44">
                        <path d="M19.74 8.74c-1.07 0-2.01.46-2.73 1.19a6.373 6.373 0 0 0-1.66-3.62l-1.08 3.52c.38.69.61 1.48.65 2.3a4.386 4.386 0 0 1-2.67 4.17 4.396 4.396 0 0 1-5.97-3.21c-.14-.7-.17-1.45-.18-2.21V5H3.24v5.95c0 .96.05 1.91.21 2.85a6.563 6.563 0 0 0 4.4 5.2 6.453 6.453 0 0 0 6.87-1.69 6.43 6.43 0 0 0 1.71-3.83 2.275 2.275 0 0 1 3.27-1.87l.61.31.77-1.88-.52-.3a4.424 4.424 0 0 0-2.42-.72z" />
                    </svg>
                </a>
                {/* Medium */}
                <a href="https://medium.com/@ermiyasdamte" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-botton)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000">
                        <path d="M2 7.01c.01-.17.09-.33.24-.43L4.91 4.06v-.5h6.94l5.36 11.7 4.72-11.7H22v.5l-1.93 1.85c-.17.13-.26.33-.23.54v12.9c-.03.2.06.4.23.54L22 21.44v.5h-7.03v-.5l2.02-1.96c.2-.2.2-.25.2-.54V7.99l-5.62 14.48h-.76L6.25 7.99v9.95c-.06.4.08.8.37 1.08l2.63 3.4v.5H2v-.5l2.63-3.4c.27-.29.4-.68.35-1.08V7.01z" />
                    </svg>
                </a>
                {/* Dribbble */}
                <a href="https://dribbble.com/ermiyasdamte" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-botton)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EA4C89" width="24" height="24">
                        <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.628-5.372-12-12-12zm7.943 6.53a9.951 9.951 0 0 1 2.057 6.126c-.232-.05-2.517-.512-4.942-.26-.19-.462-.377-.89-.584-1.297 2.436-.955 3.689-2.384 3.469-4.57zm-1.779-2.084c-.76 1.15-2.078 2.324-3.978 3.047-1.025-1.868-2.106-3.492-3.198-4.825a9.96 9.96 0 0 1 7.176 1.778zM7.68 2.812c1.104 1.305 2.25 2.904 3.31 4.703-3.157.84-6.003.855-8.163.44A10.005 10.005 0 0 1 7.68 2.812zM1.958 12.02c0-.072.002-.143.004-.215 2.56.66 5.838.562 9.155-.385.267.468.525.946.766 1.442-3.584 1.095-6.126 3.226-7.795 6.364A9.98 9.98 0 0 1 1.958 12.02zm4.917 7.64c1.55-2.867 3.763-4.816 6.906-5.783 1.4 3.59 2.243 7.184 2.527 9.373a9.977 9.977 0 0 1-9.433-3.59zm11.124 2.13c-.222-1.513-.97-5.04-2.312-8.686 2.147-.27 4.267.173 4.583.246a10.004 10.004 0 0 1-2.27 8.44z" />
                    </svg>
                </a>
            </div>
        </footer>
    );
}
