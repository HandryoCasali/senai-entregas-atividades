package br.senai.sp.testegamemania;

import java.util.concurrent.TimeUnit;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteLogin {
	private WebDriver driver;
	
	@Before
	public void Setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}
	
	@Test
	public void TestarLogin () {
		driver.get("http://localhost:4200");
		
		driver.findElement(By.id("modal-login")).click();
		
		// Primeiro teste
		WebElement inputEmail = driver.findElement(By.id("email"));
		WebElement inputSenha = driver.findElement(By.id("senha"));
		WebElement botaoEnviar = driver.findElement(By.id("botao-enviar"));
		
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		 
		String[] listaSenhas = {"senhaerrada123", "321adarreahnes", "admin"};
		
		for(int tentativas = 0; tentativas < 3; tentativas++) {
			
			try {
				inputEmail.clear();
				inputSenha.clear();
				
				inputEmail.sendKeys("email@email.com");
				inputSenha.sendKeys(listaSenhas[tentativas]);
				botaoEnviar.click();
				
				WebElement mensagem = driver.findElement(By.id("mensagem"));
				System.out.println(mensagem.getText());
				
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		 }
		 
	}
}
 