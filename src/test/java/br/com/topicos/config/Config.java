package br.com.topicos.config;

import java.io.File;

public class Config {
	public static final String BROWSER              = new File("").getAbsolutePath()+"\\src\\test\\resources\\driver\\chromedriver.exe";
	public static final boolean HEADLESS            = false;
	public static final String ENDERECO             = "http://idebescola.inep.gov.br/ideb/consulta-publica";
}
