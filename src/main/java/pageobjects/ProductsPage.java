package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ProductsPage {
    WebDriver driver;

    public ProductsPage(WebDriver browser) {
        this.driver = browser;
        PageFactory.initElements(driver, this);
    }

    @FindBy(css = "div.content_price.col-xs-5.col-md-12 span[itemprop='price']")
    private WebElement lblPrice;

    @FindBy(css = "p.alert.alert-warning")
    private WebElement lblMensaje;

    @FindBy(xpath = "//*[@id='center_column']/ul/li/div/div/div[3]/div/div[2]/a[1]/span")
    private WebElement btnAddCart;

    @FindBy(css = "i.icon-chevron-left.left")
    private WebElement btnContinueShopping;

    @FindBy(css = "span.ajax_cart_quantity.unvisible")
    private WebElement lblCantidad;

    public String getPrice(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(lblPrice));
        return lblPrice.getText();
    }

    public String getMensaje(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(lblMensaje));
        return lblMensaje.getText();
    }

    public void clickAddCart(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(btnAddCart));
        btnAddCart.click();
    }

    public void clickContinueShopping(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(btnContinueShopping));
        btnContinueShopping.click();
    }

    public String getCantidad(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(lblCantidad));
        return lblCantidad.getText();
    }

}
