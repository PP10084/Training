import React from 'react';

const WebVulnerabilities = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">Understanding Common Web Vulnerabilities: Protecting Your Online Presence</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-black">Introduction</h2>
        <p className="text-black">As we increasingly rely on the internet for everyday tasks, ensuring the security of our online activities becomes crucial. Websites and applications can be targets for various types of attacks that exploit vulnerabilities to steal data, damage systems, or disrupt services. In this blog, we'll explore some common web vulnerabilities, including SQL injection, Cross-Site Request Forgery (CSRF), Cross-Site Scripting (XSS), clickjacking, and OTP bypass. Understanding these threats can help you better protect your online presence.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-black">SQL Injection</h2>
        <p className="text-black">SQL injection is a technique used by attackers to manipulate databases through web applications. By inserting malicious code into input fields, hackers can access, modify, or delete data stored in the database. For example, if a login form is not properly secured, an attacker might enter harmful code instead of a username and password, gaining unauthorized access to the system.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-black">Cross-Site Request Forgery (CSRF)</h2>
        <p className="text-black">CSRF attacks trick users into performing actions they didn’t intend to by exploiting their authenticated sessions on a website. For example, an attacker might send a user a malicious link that, when clicked, performs an unwanted action like changing account details or making a purchase. This is also have an exception condition in order to conduct this attack that is this attack is only be conducted if the session is active if the session is not active or gets expired while doing the attack the complete attack fails.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-black">Clickjacking</h2>
        <p className="text-black">Clickjacking tricks users into clicking on something different from what they perceive. This can be done by layering transparent or opaque elements over legitimate clickable content. For example, an attacker might hide a "Like" button underneath a "Play" button, causing users to like a page without realizing it.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-black">OTP Bypass</h2>
        <p className="text-black">OTP (One-Time Password) bypass occurs when attackers find a way to intercept or predict the OTP sent for authentication purposes. This can allow them to gain unauthorized access to user accounts even with two-factor authentication in place.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2 text-black">Conclusion</h2>
        <p className="text-black">Web vulnerabilities like SQL injection, CSRF, XSS, clickjacking, and OTP bypass can pose serious threats to both individuals and organizations. By understanding these common attacks and implementing protective measures, you can enhance the security of your online presence. Regularly updating software, validating and sanitizing inputs, using security headers, and educating users about potential risks are essential steps in safeguarding against these vulnerabilities. Stay informed and proactive to keep your web applications safe from malicious attacks.</p>
      </div>
    </div>
  );
};

export default WebVulnerabilities;
