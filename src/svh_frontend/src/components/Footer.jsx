function Footer() {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear()

    return (    <footer>
        <div class="container">
            <p>&copy; {currentYear} Street Vendor Helper. All rights reserved.</p>
        </div>
    </footer>)
}

export default Footer;