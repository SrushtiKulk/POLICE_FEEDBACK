import "./public.css";

function Public() {
    return (
        <div className="publiccontent" id='public'>
            <h5>Welcome to Our Community-Powered Police Feedback System!</h5>
            <h6> Why Share Your Feedback?</h6>
            Your feedback is a crucial part of our commitment to continuous improvement. By sharing your experiences, you play an integral role in helping us enhance our services, strengthen community relations, and uphold the highest standards of accountability
            <div className="guide">
                <h6>Guidelines for using the feedback :</h6>
                <p>
                    Visit our Online Feedback Portal:
                    For a comprehensive experience, visit our online portal to submit detailed comments and suggestions.
                    <br />
                    Engage with the Auto Chatbot:
                    Answer interactive questions from our Auto Chatbot to share more detailed feedback.
                </p>
            </div>
            <div className="need">
                <p>
                    Why Your Feedback Matters:
                    Your insights are invaluable in shaping a more transparent, accountable, and community-oriented police service. By participating in our feedback system, you contribute to positive changes and better policing.
                </p>
            </div>
        </div>

    );
}

export default Public;