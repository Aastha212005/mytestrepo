describe('Gmail Automation Test', () => {
    it('should automate Gmail tasks', async () => {
     
        await browser.url('https://mail.google.com/');
        await browser.pause(2000); 
        
        const emailInput = await $('#identifierId');
      
        await emailInput.setValue('aasthasuryawanshi3@gmail.com');
      
        await emailInput.addValue('\uE007');
        await browser.pause(2000);
        
        const passwordInput = await $('input[name="password"]');
       
        await passwordInput.setValue('Aastha@21');
      
        await passwordInput.addValue('\uE007');
        await browser.pause(5000);
        
    
        const composeButton = await $('.T-I.T-I-KE.L3');
        await composeButton.click();
        await browser.pause(2000);
        
        const toInput = await $('textarea[name="to"]');
       
        await toInput.setValue('aasthasuryawanshi3@gmail.com');
        
        const subjectInput = await $('input[name="subjectbox"]');
     
        await subjectInput.setValue('Test Mail');
        
        const bodyInput = await $('.Am.Al.editable.LW-avf.tS-tW');
        
        await bodyInput.setValue('Test Email Body');
        
      
        const moreOptionsButton = await $('.aB.gQ.pE');
        await moreOptionsButton.click();
        await browser.pause(1000);
        
        const labelInput = await $('.J-N-Jz');
      
        await labelInput.setValue('Social');
     
        await labelInput.addValue('\uE007');
        await browser.pause(1000);
        
        
        const sendButton = await $('.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3');
        await sendButton.click();
        await browser.pause(5000);
        
      
        const inboxButton = await $('.aHS-bnt');
        await inboxButton.click();
        await browser.pause(5000);
        
       
        const emailCheckbox = await $('.oZ-jc.T-Jo.J-J5-Ji.T-Jo-Jp');
        await emailCheckbox.click();
        
        const starButton = await $('.aXw.T-Jo-Jp');
        await starButton.click();
        await browser.pause(1000);
        
      
        const email = await $('span.bog=Test Mail');
        await email.click();
        await browser.pause(2000);
        
     
        const label = await $('span.g2');
        const labelText = await label.getText();
        expect(labelText).toBe('Social', 'Email label verification failed!');
        
        const emailSubject = await $('h2.hP');
        const emailSubjectText = await emailSubject.getText();
        expect(emailSubjectText).toBe('Test Mail', 'Email subject verification failed!');
        
        const emailBody = await $('div.a3s.aiL ');
        const emailBodyText = await emailBody.getText();
        expect(emailBodyText).toBe('Test Email Body', 'Email body verification failed!');
        
        console.log('All tests passed successfully!');
    });
});
