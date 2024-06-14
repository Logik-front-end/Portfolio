import React, { useState } from 'react';
import axios from 'axios';
import './C.css';

function Connect() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await axios.post('http://localhost:3001/submit-form', {
                name,
                email,
                message,
            });
            if (response.status === 200) {
                alert('Message sent successfully');
                setName('');
                setEmail('');
                setMessage('');
                sendTelegramMessage(name, email, message);
            }
        } catch (error) {
            alert('Failed to send message. See console for details.');
            console.error('Error:', error);
            console.error('Error Response:', error.response);
        } finally {
            setSubmitting(false);
        }
    };

    const sendTelegramMessage = async (name, email, message) => {
        try {
            await axios.post(
                'http://localhost:3001/send-telegram-message',
                {
                    name,
                    email,
                    message,
                }
            );
        } catch (error) {
            console.error('Error sending Telegram message:', error);
        }
    };

    return (
        <section className="Connect">
            <div id="contact" className="wrapper">
                <div className="container">
                    <div className="section-block section-info">
                        <h2 className="title">Contact Me</h2>
                        <p className="body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias
                            voluptatibus enim deserunt quo nisi, mollitia repudiandae, tempore, eos adipisci rem
                            possimus molestiae. Odio sunt quod dolor optio quibusdam dolores?
                        </p>
                        <div className="social-links">
                            <a href="#contact">
                                <i className="fas fa-envelope"></i>
                            </a>
                            <a href="#contact">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#contact">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#contact">
                                <i className="fab fa-weixin"></i>
                            </a>
                        </div>
                    </div>

                    <div className="section-block form-block">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="form-label">Name</div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name.."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <div className="form-label">Email</div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your email.."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <div className="form-label">Message</div>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Please leave me a message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" disabled={submitting}>
                                    {submitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Connect;
