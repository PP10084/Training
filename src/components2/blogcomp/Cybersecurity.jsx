import React from 'react';

const CybersecurityComponent = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-orange-400">Protecting India's Digital Landscape: A Guide to Cybersecurity</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-orange-400">Introduction</h2>
        <p className="text-black">Cybersecurity involves safeguarding computers, networks, software, and data from digital threats. It includes various activities to detect and prevent unauthorized access to systems, applications, and databases. As more people in India store sensitive information online—like credit card details, bank accounts, and passwords—the importance of cybersecurity has grown. Cyber threats can appear in many forms, such as malware, phishing scams, spam emails, or personal frauds. With India's digital infrastructure expanding, the risk of cyber-attacks increases, making strategic cybersecurity measures essential to protect citizens across the nation.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-orange-400">Types of Cybersecurity</h2>
        <ul className="list-disc ml-6 text-black">
          <li>Ethical Hacking</li>
          <li>Penetration Testing</li>
          <li>Risk Assessment and Management</li>
          <li>Cyber Forensics</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-orange-400">Implementing Cybersecurity</h2>
        <p className="text-black">Creating a Secure Network: To protect valuable data and systems from threats, organizations need to set up firewalls, install anti-virus software, create access control lists, and use encryption technologies. Educating users about security protocols, such as changing passwords regularly and avoiding suspicious links, is also crucial. A comprehensive security policy should outline acceptable use guidelines for employees and customers.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-orange-400">Preventing Cyber Crimes</h2>
        <p className="text-black">Developing Secure Access Policies: These policies define who can access sensitive information and what they are allowed to do with it. Effective authentication methods, such as multi-factor authentication (MFA), ensure that only authorized personnel have access to confidential systems, providing greater protection against unauthorized entry.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-orange-400">Impact of Cybersecurity</h2>
        <p className="text-black">Lack of Security Awareness: Without proper knowledge about cybersecurity, organizations risk data breaches and other malicious activities. Users may unknowingly expose themselves to risks by sharing confidential information over unsecured networks or engaging with suspicious links. Recognizing the importance of cybersecurity is essential for both businesses and individuals to avoid falling victim to cyber criminals.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2 text-orange-400">Conclusion</h2>
        <p className="text-black">Cybersecurity is crucial for organizations and individuals in India using digital technologies. Effective measures can reduce the risk of data breaches and ensure business continuity. Educating users about best practices helps them identify suspicious links or websites, further reducing potential harm. Improved data encryption and secure access policies offer greater protection against unauthorized entry. Building strong relationships with cybersecurity vendors keeps organizations updated on new threats and vulnerabilities, allowing them to take necessary steps to protect their infrastructure over time.</p>
      </div>
    </div>
  );
};

export default CybersecurityComponent;
