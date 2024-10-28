function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (<footer>
        <div className="container footer">
            <p>&copy; {currentYear} Street Vendor Helper. All rights reserved.</p>
        </div>
    </footer>);
}
export default Footer;
